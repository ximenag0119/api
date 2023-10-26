let express=require('express');
let mysql=require('mysql');

let app=express();
app.use(express.json());

app.listen('3000', function(){
    console.log('Servidor OK');
})
app.get('/',function(req,res){
    res.send('Ruta INICIO');
})


let conexion = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'articulosdb'
})
conexion.connect(function(error){
    if(error){
        throw error;
    } else{
        console.log('Conexión exitosa');
    }
})

app.get('/api/articulos',(req,res)=>{
    conexion.query('SELECT * FROM articulos', (error,filas)=>{
        if(error){
            throw error;
        } else{
            res.send(filas);
        }
    })
})

app.get('/api/articulos/:id', (req,res)=>{
    conexion.query('SELECT * FROM articulos WHERE id=?', [req.params.id],(error,fila)=>{

        if(error){
            throw error;
        } else{
            res.send(fila);
            res.send(fila[0].descripcion);
        }
    });
});

app.post('/api/articulos',(req,res)=>{
    let data = {descripcion:req.body.descripcion, precio:req.body.precio, stock:req.body.stock};
    let sql = "INSERT INTO articulos SET ?";
    conexion.query(sql,data,function(error,results){
        if(error){
            throw error;
        } else{
            res.send(results);
        }
    })
})
app.put('/api/articulos/:id', (req, res) => {
    let id = req.params.id;
    let data = {
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        stock: req.body.stock
    };
    let sql = "UPDATE articulos SET ? WHERE id = ?";
    conexion.query(sql, [data, id], (error, results) => {
        if (error) {
            throw error;
        } else {
            res.send("Registro actualizado con éxito");
        }
    });
});
app.delete('/api/articulos/:id', (req, res) => {
    let id = req.params.id;
    let sql = "DELETE FROM articulos WHERE id = ?";
    conexion.query(sql, [id], (error, results) => {
        if (error) {
            throw error;
        } else {
            res.send("Registro eliminado con éxito");
        }
    });
});