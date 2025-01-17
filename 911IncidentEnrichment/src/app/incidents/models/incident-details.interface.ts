export interface Address {
    address_id: string;
    address_line1: string;
    city: string;
    common_place_name: string;
    cross_street1: string;
    cross_street2: string;
    first_due: string;
    geohash: string;
    latitude: number;
    longitude: number;
    name: string;
    number: string;
    postal_code: string;
    prefix_direction: string;
    response_zone: string;
    state: string;
    suffix_direction: string;
    type: string;
  }
  
  interface ApparatusUnitStatus {
    arrived: LocationStatus;
    available: LocationStatus;
    dispatched: LocationStatus;
    enroute: LocationStatus;
  }
  
  interface LocationStatus {
    geohash: string;
    latitude: number;
    longitude: number;
    timestamp: string;
  }
  
  interface ApparatusExtendedData {
    event_duration: number;
    response_duration: number;
    travel_duration: number;
    turnout_duration: number;
  }
  
  export interface Apparatus {
    car_id: string;
    distance: number;
    extended_data: ApparatusExtendedData;
    geohash: string;
    personnel: any[]; // Assuming personnel is an empty array for now, update if needed
    shift: string;
    station: string;
    unit_id: string;
    unit_status: ApparatusUnitStatus;
    unit_type: string;
  }
  
  interface DescriptionExtendedData {
    dispatch_duration: number;
    event_duration: number;
    response_time: number;
  }
  
  export interface Description {
    comments: string;
    day_of_week: string;
    event_closed: string;
    event_id: string;
    event_opened: string;
    extended_data: DescriptionExtendedData;
    first_unit_arrived: string;
    first_unit_dispatched: string;
    first_unit_enroute: string;
    hour_of_day: number;
    incident_number: string;
    loi_search_complete: string;
    subtype: string;
    type: string;
  }
  
  interface FireDepartment {
    fd_id: string;
    firecares_id: string;
    name: string;
    shift: string;
    state: string;
    timezone: string;
  }
  
  export interface IncidentData {
    address: Address;
    apparatus: Apparatus[];
    description: Description;
    fire_department: FireDepartment;
    version: string;
  }
  