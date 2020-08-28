var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require ('express-session');
const log = require('./middlewares/log.js');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var registerRouter = require('./routes/register');
var ingresoRouter = require('./routes/ingreso');
var loginRouter = require('./routes/login');
var productRouter = require('./routes/product');
var carritoRouter = require('./routes/carrito');
var categoriaRouter = require('./routes/categoria');
var categoriaMarketingRouter = require('./routes/categoriaMarketing');
var categoriaGestionRouter = require('./routes/categoriaGestion');
var categoriaComunicacionRouter = require('./routes/categoriaComunicacion');
var listaProductosRouter = require('./routes/listaProductos');
var crudProductosRouter = require('./routes/crudProductos');
var editarProductosRouter = require('./routes/editarProductos');
var editarUsuariosRouter = require('./routes/editarUsuarios');
var userProfileRouter = require('./routes/userProfile');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(session({ secret: "mensaje secreto", resave: false, saveUninitialized: true }));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(log);

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/register', registerRouter);
app.use('/register/ingreso', ingresoRouter);
app.use('/login', loginRouter);
app.use('/product', productRouter);
app.use('/crudProductos', crudProductosRouter);
app.use('/carrito',carritoRouter);
app.use('/categoria',categoriaRouter);
app.use('/categoriaMarketing',categoriaMarketingRouter);
app.use('/categoriaGestion',categoriaGestionRouter);
app.use('/categoriaComunicacion',categoriaComunicacionRouter);
app.use('/listaProductos',listaProductosRouter);
app.use('/editarProductos', editarProductosRouter);
app.use('/editarUsuarios', editarUsuariosRouter);
app.use('/userProfile', userProfileRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
