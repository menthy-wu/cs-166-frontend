import { Pool } from "pg/lib";
import { config } from "../../../../config";
import { NextResponse } from "next/server";

const pool = new Pool(config);

export async function GET(req) {
  const res = NextResponse;
  const query = `DROP TABLE IF EXISTS Store CASCADE;
  DROP TABLE IF EXISTS Product CASCADE;
  DROP TABLE IF EXISTS Users CASCADE;
  DROP TABLE IF EXISTS Warehouse CASCADE;
  DROP TABLE IF EXISTS Orders CASCADE;
  DROP TABLE IF EXISTS ProductSupplyRequests CASCADE;
  DROP TABLE IF EXISTS ProductUpdates CASCADE;
  
  CREATE TABLE Users ( userID serial,
                       name char(50) NOT NULL,
                       password char(11) NOT NULL,    
                       latitude decimal(8,6) NOT NULL,
                       longitude decimal(9,6) NOT NULL,
                       type char(10) NOT NULL,  -- type can be 'customer', 'manager', 'admin' 
                       PRIMARY KEY(userID)
  );
  
  
  CREATE TABLE Store ( storeID integer, 
                       --name char(30) NOT NULL,
                       latitude decimal(8, 6) NOT NULL,
                       longitude decimal(9, 6) NOT NULL,
                       managerID integer NOT NULL,
                       dateEstablished date,
                       PRIMARY KEY(storeID), 
                       FOREIGN KEY(managerID) REFERENCES Users(userID)
  );
  
  CREATE TABLE Product ( storeID integer NOT NULL, 
                         productName char(30) NOT NULL,
                         numberOfUnits integer NOT NULL,
                         pricePerUnit float NOT NULL,
                         PRIMARY KEY(storeID, productName), 
                         FOREIGN KEY(storeID) REFERENCES Store(storeID)
                         ON DELETE CASCADE
  );
  
  CREATE TABLE Warehouse ( WarehouseID integer,
                           area integer,
                           latitude decimal(8,6) NOT NULL,
                           longitude decimal(9,6)  NOT NULL,
                           PRIMARY KEY(WarehouseID));
  
  CREATE TABLE Orders ( 
                       orderNumber serial NOT NULL,       
                       customerID integer NOT NULL,
                       storeID integer NOT NULL,
                       productName char(30) NOT NULL, 
                       unitsOrdered integer NOT NULL, 
                       orderTime timestamp NOT NULL,
                       PRIMARY KEY(orderNumber),
                       FOREIGN KEY(customerID) REFERENCES Users(userID),
                       FOREIGN KEY(storeID, productName) REFERENCES Product(storeID, productName)
  );
  
  CREATE TABLE ProductSupplyRequests (  
                                 requestNumber serial NOT NULL,
                                 managerID integer NOT NULL,    --User ID of the Manager who makes the supply request
                                 warehouseID integer NOT NULL,
                                 storeID integer NOT NULL,
                                 productName char(30) NOT NULL, 
                                 unitsRequested integer NOT NULL,
                                 PRIMARY KEY(requestNumber),
                                 FOREIGN KEY(managerID) REFERENCES Users(userID), 
                                 FOREIGN KEY(warehouseID) REFERENCES Warehouse(warehouseID),
                                 FOREIGN KEY(storeID, productName) REFERENCES Product(storeID, productName)
  );
  
  CREATE TABLE ProductUpdates (
                               updateNumber serial,	
                              managerID integer NOT NULL,
                              storeID integer NOT NULL,
                                 productName char(30) NOT NULL, 
                              updatedOn timestamp NOT NULL,
                              PRIMARY KEY(updateNumber),
                              FOREIGN KEY(managerID) REFERENCES Users(userID),
                              FOREIGN KEY(storeID, productName) REFERENCES Product(storeID, productName)
  );
  COPY Users
FROM '../../../data/data/users.csv'
WITH DELIMITER ',' CSV HEADER;
ALTER SEQUENCE users_userID_seq RESTART 101;

COPY Store
FROM '../../../data/data/stores.csv'
WITH DELIMITER ',' CSV HEADER;

COPY Product
FROM '../../../data/data/products.csv'
WITH DELIMITER ',' CSV HEADER;

COPY Warehouse
FROM '../../../data/data/warehouse.csv'
WITH DELIMITER ',' CSV HEADER;

COPY Orders
FROM '../../../data/data/orders.csv'
WITH DELIMITER ',' CSV HEADER;
ALTER SEQUENCE orders_orderNumber_seq RESTART 501;


COPY ProductSupplyRequests
FROM '../../../data/data/productSupplyRequests.csv'
WITH DELIMITER ',' CSV HEADER;
ALTER SEQUENCE productsupplyrequests_requestNumber_seq RESTART 11;

COPY ProductUpdates
FROM '../../../data/data/productUpdates.csv'
WITH DELIMITER ',' CSV HEADER;
ALTER SEQUENCE productupdates_updateNumber_seq RESTART 51;
`;
  try {
    const client = await pool.connect();
    console.log("connected");
    response = await client.query(query);
    console.log(response);
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
