let express=require('express');
let mysql=require('mysql');

let app=express();
<<<<<<< HEAD
app.use(express.json());
=======
>>>>>>> bb129923192ea32c7b775578c769225d5c67d8ef

app.listen('3000', function(){
    console.log('Servidor OK');
})
app.get('/',function(req,res){
    res.send('Ruta INICIO');
})

<<<<<<< HEAD

=======
//crear
//objeto de la conexion-- se establecen los parametros
>>>>>>> bb129923192ea32c7b775578c769225d5c67d8ef
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
<<<<<<< HEAD

=======
>>>>>>> bb129923192ea32c7b775578c769225d5c67d8ef
        if(error){
            throw error;
        } else{
            res.send(fila);
<<<<<<< HEAD
            res.send(fila[0].descripcion);
=======
            res.send(fila[0].descripción);
>>>>>>> bb129923192ea32c7b775578c769225d5c67d8ef
        }
    });
});

app.post('/api/articulos',(req,res)=>{
<<<<<<< HEAD
    let data = {descripcion:req.body.descripcion, precio:req.body.precio, stock:req.body.stock};
    let sql = "INSERT INTO articulos SET ?";
    conexion.query(sql,data,function(error,results){
=======
    let data = {id:req.body.id, descripción:req.body.descripción, precio:req.body.precio, stock:req.body.stock};
    let sql = "INSERT INTO articulos SET ?";
    conexion.query(sql,data,function(error,result){
>>>>>>> bb129923192ea32c7b775578c769225d5c67d8ef
        if(error){
            throw error;
        } else{
            res.send(results);
        }
    })
<<<<<<< HEAD
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
=======
})
>>>>>>> bb129923192ea32c7b775578c769225d5c67d8ef
