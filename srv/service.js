module.exports = async srv => {
    const Products = this.entities;
    const ext = await cds.connect.to('northwind');
    srv.on("READ",Products, req => {
        return ext.tx(req).run(req.query);
    })
}