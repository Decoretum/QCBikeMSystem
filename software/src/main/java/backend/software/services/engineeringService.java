package backend.software.services;

import java.time.Duration;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cglib.core.Local;
import org.springframework.data.jpa.convert.threeten.Jsr310JpaConverters.LocalDateConverter;
import org.springframework.stereotype.Component;

import backend.software.dto.confirmAppointment;
import backend.software.dto.confirmOrder;
import backend.software.dto.confirmRental;
import backend.software.dto.deleteBikeOrder;
import backend.software.dto.editAppointment;
import backend.software.dto.makeAnOrder;
import backend.software.dto.makeAppointment;
import backend.software.dto.makeCategory;
import backend.software.dto.makeColor;
import backend.software.dto.makeCustomer;
import backend.software.dto.makeOrder;
import backend.software.dto.rentBike;
import backend.software.dto.makeBike;
import backend.software.models.Appointment;
import backend.software.models.Bike;
import backend.software.models.BikeCategories;
import backend.software.models.BikeColors;
import backend.software.models.Categories;
import backend.software.models.Customer;
import backend.software.models.OrderEntry;
import backend.software.models.Orders;
import backend.software.models.RentedBike;
import backend.software.repositories.AppointmentRepository;
import backend.software.repositories.BikeCategoryRepository;
import backend.software.repositories.BikeColorsRepository;
import backend.software.repositories.BikeRepository;
import backend.software.repositories.CategoryRepository;
import backend.software.repositories.CustomerRepository;
import backend.software.repositories.OrderEntryRepository;
import backend.software.repositories.OrderRepostitory;
import backend.software.repositories.RentedBikeRepository;
import jakarta.validation.ConstraintViolation;
import jakarta.validation.Validation;
import jakarta.validation.Validator;

@Component
public class engineeringService {
    @Autowired
    private BikeRepository bikeRepository;

    @Autowired
    private BikeColorsRepository bikeColorsRepository;

    @Autowired
    private OrderRepostitory orderRepostitory;

    @Autowired
    private OrderEntryRepository orderEntryRepository;

    @Autowired
    private BikeCategoryRepository bikeCategoryRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private AppointmentRepository appointmentRepository;

    @Autowired
    private RentedBikeRepository rentedBikeRepository;

    public engineeringService(RentedBikeRepository rentedBikeRepository, AppointmentRepository appointmentRepository, CustomerRepository customerRepository, CategoryRepository categoryRepository, BikeCategoryRepository bikeCategoryRepository, BikeColorsRepository bikeColorsRepository, OrderEntryRepository orderEntryRepository, BikeRepository bikeRepository, OrderRepostitory orderRepostitory){
        this.rentedBikeRepository = rentedBikeRepository;
        this.appointmentRepository = appointmentRepository;
        this.customerRepository = customerRepository;
        this.categoryRepository = categoryRepository;
        this.bikeCategoryRepository = bikeCategoryRepository;
        this.bikeColorsRepository = bikeColorsRepository;
        this.orderEntryRepository = orderEntryRepository;
        this.bikeColorsRepository = bikeColorsRepository;
        this.bikeRepository = bikeRepository;
        this.orderRepostitory = orderRepostitory;
    }

    public Bike getBike(Long bikeID){
        return bikeRepository.queryID(bikeID).get(0);
    }

    //BIKE
    public ArrayList<Object> getBikes(){
        ArrayList<Object> bikes = bikeRepository.getBikes();
        return bikes;
    }

    public HashMap<Object, Object> makeBike(makeBike dto){
        HashMap<Object, Object> result = new HashMap<>();

        Bike newBike = new Bike();
        newBike.setName(dto.getName());
        newBike.setDescription(dto.getDescription());
        newBike.setPrice(dto.getPrice());
        newBike.setStock(dto.getStock());
        newBike.setWheelSize(dto.getWheelSize());
        newBike.setCanBeBorrowed(true);

        //Validator
        Validator validator = Validation.buildDefaultValidatorFactory().getValidator();
        Set<ConstraintViolation<Bike>> constraintViolations = validator.validate(newBike);
        if (constraintViolations.size() >= 1){
            ArrayList<String> errors = new ArrayList<>();
            for (ConstraintViolation<Bike> violation : constraintViolations){
                errors.add(violation.getPropertyPath() + " " + violation.getMessage());
            }
            result.put("result", errors);
            return result;
        }
        bikeRepository.save(newBike);
        
        //Colors and Categories
        ArrayList<String> dtoColors = dto.getColors();
        ArrayList<String> dtoCategs = dto.getCategory();

        
        for (int i = 0; i < dtoColors.size(); i++){
            BikeColors color = new BikeColors();
            color.setName((String) dtoColors.get(i));
            color.setBike(newBike);
            bikeColorsRepository.save(color);
            bikeRepository.save(newBike);
        }
        

        for (int i = 0; i < dtoCategs.size(); i++){
            //Find Category and relate them
            Categories category = categoryRepository.findThroughName((String) dtoCategs.get(i)).get(0);
            
            BikeCategories hybrid = new BikeCategories();

            hybrid.setBike(newBike);
            hybrid.setCategories(category);

            //bikeRepository.save(newBike);
            bikeCategoryRepository.save(hybrid);
        }

        result.put("result", "Successfully added Bike " + dto.getName() + " to the app!");
        return result;
    }

    public HashMap<Object, Object> editBike(makeBike dto){
        HashMap<Object, Object> result = new HashMap<>();
        Bike newBike = bikeRepository.queryName(dto.getName()).get(0);

        newBike.setName(dto.getName());
        newBike.setDescription(dto.getDescription());
        newBike.setPrice(dto.getPrice());
        newBike.setStock(dto.getStock());
        newBike.setWheelSize(dto.getWheelSize());

        //Validator
        Validator validator = Validation.buildDefaultValidatorFactory().getValidator();
        Set<ConstraintViolation<Bike>> constraintViolations = validator.validate(newBike);
        if (constraintViolations.size() >= 1){
            ArrayList<String> errors = new ArrayList<>();
            for (ConstraintViolation<Bike> violation : constraintViolations){
                errors.add(violation.getPropertyPath() + " " + violation.getMessage());
            }
            result.put("result", errors);
            return result;
        }
        bikeRepository.save(newBike);
        
        //Colors and Categories
        ArrayList<String> dtoColors = dto.getColors();
        ArrayList<String> dtoCategs = dto.getCategory();

        
        //Removing old Bike Colors
        List<BikeColors> bikeColors = newBike.getBikeColors();
        ArrayList<BikeColors> toDelete = new ArrayList<>();
            for (int i = 0; i < bikeColors.size(); i++){
                BikeColors color = bikeColors.get(i);
                if (!dtoColors.contains(color.getName())){
                    color.setBike(null);

                    bikeColorsRepository.save(color);
                    toDelete.add(color);
                }
            }
        bikeColorsRepository.deleteAll(toDelete);

        
        //add New Bike Color
        for (int i = 0; i < dtoColors.size(); i++){
            ArrayList<Object> bikeColors2 = bikeColorsRepository.queryName((String) dtoColors.get(i), newBike);
            if (bikeColors2.size() == 0){
                BikeColors color = new BikeColors();
                color.setName((String) dtoColors.get(i));
                color.setBike(newBike);
                bikeColorsRepository.save(color);

            }
        }

        
        //Removing old Categories
        ArrayList<BikeCategories> toDelete2 = new ArrayList<>();
        for (BikeCategories categ : newBike.getBikeCategories()){
            //Query Category from BikeCategory
            Categories category = categ.getCategories();
                if (!dtoCategs.contains(category.getName())){
                    toDelete2.add(categ);

                    categ.setBike(null);
                    categ.setCategories(null);

                    bikeCategoryRepository.save(categ);
                }
            }
        bikeCategoryRepository.deleteAll(toDelete2);
        
        //Adding new Categories
        for (int i = 0; i < dtoCategs.size(); i++){
            Categories category = categoryRepository.findThroughName(dtoCategs.get(i)).get(0);
            ArrayList<BikeCategories> bikeCategory = bikeCategoryRepository.queryId(newBike, category);
            if (bikeCategory.size() == 0){
                BikeCategories hybrid = new BikeCategories();

                hybrid.setBike(newBike);
                hybrid.setCategories(category);

                //bikeRepository.save(newBike);
                bikeCategoryRepository.save(hybrid);
            }
        }

        result.put("result", "Successfully edited Bike " + dto.getName() + " to the app!");
        return result;


    }

    //BIKE COMPONENTS

    public ArrayList<Categories> getCategories(){
        return categoryRepository.findAll();
    }

    public void addCategory(makeCategory json){
        Categories category = new Categories();
        category.setName((String) json.getName());
        categoryRepository.save(category);
    }

    public void addColor(makeColor json){
        BikeColors color = new BikeColors();
        color.setName(json.getName());

        Bike bike = (Bike) bikeRepository.queryName(json.getBikeName()).get(0);
        color.setBike(bike);

        bikeRepository.save(bike);
        bikeColorsRepository.save(color);
    }

    //ORDERS

    public Orders getOrder(String uuid){
        Orders order = orderRepostitory.uuidQuery(uuid).get(0);
        return order;
    }

    public void makeOrder(makeAnOrder order){
        Orders newOrder = new Orders();
        String uuid = UUID.randomUUID().toString();

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("MM-dd-yyyy");
        DateTimeFormatter newFormatter = DateTimeFormatter.ofPattern("MM/dd/yyyy");
        String date = LocalDate.parse(order.getDateOfPurchase(), formatter).format(newFormatter);

        Customer customer = customerRepository.queryName(order.getCustomerName()).get(0);
        newOrder.setCustomer(customer);
        newOrder.setDateOfPurchase(date);
        newOrder.setDescription(order.getDescription());
        newOrder.setTotalcost(0.0);
        newOrder.setUuid(uuid);
        orderRepostitory.save(newOrder);
        System.out.println("Order Created!");
    }

    //OrderEntry Model
    public void makeBikeOrder(makeOrder order){
        Orders mainOrder = orderRepostitory.uuidQuery(order.getUuid()).get(0);
        Bike bike = bikeRepository.queryName(order.getBikeName()).get(0);
        Double oldCost = mainOrder.getTotalcost();

        OrderEntry orderEntry = new OrderEntry();

        orderEntry.setBike(bike);
        orderEntry.setOrder(mainOrder);
        orderEntry.setQuantity(order.getQuantity());
        orderEntry.setCost(order.getCost());
        mainOrder.setTotalcost(oldCost + order.getCost());

        // bikeRepository.save(bike);
        // orderRepostitory.save(mainOrder);
        orderEntryRepository.save(orderEntry);
        orderRepostitory.save(mainOrder);
        System.out.println("Bike added to order!");
    }

    //Removing a Bike Order from an Order
    public void deleteBikeOrder(deleteBikeOrder dto){
        OrderEntry bikeOrder = orderEntryRepository.findById(dto.getId()).get();
        Orders mainOrder = bikeOrder.getOrder();

        Double oldCost = mainOrder.getTotalcost();
        mainOrder.setTotalcost(oldCost - bikeOrder.getCost());
        orderEntryRepository.delete(bikeOrder);
        orderRepostitory.save(mainOrder);
    } 

    //For this, this will confirm the order and relay changes to other
    //necessary entities. 
    //Goal is to avoid using database calls as much as possible
    public HashMap<Object, Object> confirmOrder(confirmOrder dto){
        Orders cart = orderRepostitory.uuidQuery(dto.getUuid()).get(0);
        ArrayList<Object> errors = new ArrayList<>();
        List<OrderEntry> bikeOrders = cart.getOrderEntries();

        //Contain the product - cost 
        HashMap<Object, Object> productCost = new HashMap<>();
        
        for (OrderEntry a : bikeOrders){
            Bike bike = a.getBike();
            if (productCost.containsKey(bike.getName())){
                Integer oldStock = (Integer) productCost.get(bike.getName());
                productCost.put(bike.getName(), oldStock + a.getQuantity());
            } else {
                productCost.put(bike.getName(), a.getQuantity());
            }   
        }

        //Assessment
        for (Object bikeName : productCost.keySet()){
            Bike bike = bikeRepository.queryName((String) bikeName).get(0);
            Integer mapQuantity = (Integer) productCost.get(bikeName);
            if (bike.getStock() < mapQuantity){
                errors.add("Bike " + bikeName + " has an excess stock of " + productCost.get(bikeName));                
            }
        }

        if (!errors.isEmpty()){
            productCost.put("errors", errors);
        }
        
        return productCost;


    }

    //APPOINTMENTS

    public HashMap<Object, Object> makeCustomer(makeCustomer dto){
        Customer newCustomer = new Customer();
        newCustomer.setName(dto.getName());
        newCustomer.setClassification(dto.getClassification());
        newCustomer.setContactNumber(dto.getContactNumber());
        newCustomer.setIdNumber(dto.getIdNumber());

        if (dto.getEmail() == ""){
            newCustomer.setEmail(null);
        } else {
            newCustomer.setEmail(dto.getEmail());
        }

        Validator validator = Validation.buildDefaultValidatorFactory().getValidator();
        Set<ConstraintViolation<Customer>> violations = validator.validate(newCustomer);

        HashMap<Object, Object> result = new HashMap<>();
        if (violations.size() >= 1){
            ArrayList<Object> errors = new ArrayList<>();
            for (ConstraintViolation<Customer> violation : violations){
                errors.add(violation.getMessage());
            }
            result.put("errors", errors);
            return result;
        }

        customerRepository.save(newCustomer);
        result.put("result", "Customer " + dto.getName() + " added!");
        return result;
    }

    public HashMap<Object, Object> getAppointment(Long apID){
        Optional<Appointment> appointment =  appointmentRepository.findById(apID);
        HashMap<Object, Object> result = new HashMap<>();
        result.put("Appointment", appointment.get());
        return result;
    }

    public HashMap<Object, Object> makeAppointment(makeAppointment dto){
        Customer customer = (Customer) customerRepository.queryName(dto.getCustomerName()).get(0);
        
        Appointment appointment = new Appointment();

        LocalDate now = LocalDate.now();
        String dateAppointedString = dto.getDateTimeAppointed();

        //Parsing from String Date
        String year = "";
        String month = "";
        String day = "";

        for (int i = dateAppointedString.length()-1; i >= 0; i--){
            if (i > 5){
                year = String.valueOf(dateAppointedString.charAt(i)) + year;
            } else if (i > 2 && i < 5){
                day = String.valueOf(dateAppointedString.charAt(i)) + day;
            } else if (i < 2){
                month = String.valueOf(dateAppointedString.charAt(i)) + month;
            }
        }

        System.out.println(year);
        System.out.println(month);
        System.out.println(day);

        LocalDate convertedDate = LocalDate.of(Integer.parseInt(year), Integer.parseInt(month), Integer.parseInt(day));

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("MM/dd/YYYY");

        appointment.setCustomer(customer);
        appointment.setCategory(dto.getCategory());
        appointment.setDescription(dto.getDescription());
        appointment.setOngoing(true);
        appointment.setName(dto.getName());
        appointment.setCost(dto.getCost());

        appointment.setDateTimeAppointed(formatter.format(convertedDate).toString());
        appointment.setDateTimeCreated(formatter.format(now).toString());

        Validator validator = Validation.buildDefaultValidatorFactory().getValidator();
        Set<ConstraintViolation<Appointment>> violations = validator.validate(appointment);
        
        //Validation
        HashMap<Object, Object> result = new HashMap<>();
        if (violations.size() >= 1){
            ArrayList<Object> errors = new ArrayList<>();
            for (ConstraintViolation<Appointment> violation : violations){
                errors.add(violation.getMessage());
            }
            result.put("errors", errors);
            return result;
        }

        appointmentRepository.save(appointment);
        result.put("result", "Appointment successfully created!");
        return result;  
    }

    public HashMap<Object, Object> editAppointment(editAppointment dto){
        Appointment appointment = appointmentRepository.findById(dto.getId()).get();
        Customer customer = customerRepository.queryName(dto.getCustomerName()).get(0);
        appointment.setCategory(dto.getCategory());
        appointment.setCost(dto.getCost());
        appointment.setCustomer(customer);
        appointment.setDateTimeAppointed(dto.getDateTimeAppointed());
        appointment.setDescription(dto.getDescription());
        appointment.setName(dto.getName());
        appointment.setOngoing(dto.getOngoing());
        appointmentRepository.save(appointment);

        Validator validator = Validation.buildDefaultValidatorFactory().getValidator();
        Set<ConstraintViolation<Appointment>> violations = validator.validate(appointment);

        //Validation
        HashMap<Object, Object> result = new HashMap<>();
        if (violations.size() >= 1){
            ArrayList<Object> errors = new ArrayList<>();
            for (ConstraintViolation<Appointment> violation : violations){
                errors.add(violation.getMessage());
            }
            result.put("errors", errors);
            return result;
        }

        result.put("result", "Appointment successfully edited");
        return result;
    }

    public void confirmAppointment(confirmAppointment dto){
        Optional<Appointment> appointment = appointmentRepository.findById(dto.getId());
        appointment.get().setOngoing(false);
        appointmentRepository.save(appointment.get());
        System.out.println("Appointment Confirmed");
    }


    public void rentBike(rentBike dto){
        Bike bike = bikeRepository.queryName(dto.getBikeName()).get(0);
        Customer customer = customerRepository.queryName(dto.getCustomerName()).get(0);
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("MM/dd/YYYY");
        LocalDate date = LocalDate.now();
        RentedBike rentedBike = new RentedBike();
        Long days = dto.getDays();
        Long hours = 24 * days;

        rentedBike.setBike(bike);
        rentedBike.setCustomer(customer);
        rentedBike.setDateRented(formatter.format(date));
        rentedBike.setRentalDuration(hours);
        bike.setCanBeBorrowed(false);
        
        rentedBikeRepository.save(rentedBike);
        bikeRepository.save(bike);
    }

    public void confirmRental(confirmRental dto){
        RentedBike rentedBike = rentedBikeRepository.findById(dto.getRentalID()).get();
        Customer customer = rentedBike.getCustomer();
        Bike bike = rentedBike.getBike();
        
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("MM/dd/yyyy");
        DateTimeFormatter oldFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");


        String nowDate = LocalDate.parse(LocalDate.now().toString(), oldFormatter).format(formatter);

        LocalDate now = LocalDate.parse(nowDate, formatter);
        LocalDate dateRented = LocalDate.parse(rentedBike.getDateRented(), formatter);
        Long duration = now.until(dateRented, ChronoUnit.DAYS);

        System.out.println("DIFFERENCE: " + duration);
        
        Long difference = Math.abs(duration);
        Long rentDuration = rentedBike.getRentalDuration();

        Double baseCost = 200 + (2 * (rentDuration + 1.5));
        Double penalty;

        if (difference != 0) {
            penalty = baseCost + (5 * (difference + 1.5));
        } else {
            penalty = 0.0;
        }

        bike.setCanBeBorrowed(true);
        customer.setBalance(penalty + baseCost);
        rentedBikeRepository.save(rentedBike);
        customerRepository.save(customer);
        bikeRepository.save(bike);
        System.out.println("Bike Rentail Completed!");
        
    }


}