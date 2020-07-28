using northwind from './external/northwind.csn';

service CloudRemoteDemo {

    entity Products as projection on northwind.Products;
    entity Suppliers as projection on northwind.Suppliers;

}
