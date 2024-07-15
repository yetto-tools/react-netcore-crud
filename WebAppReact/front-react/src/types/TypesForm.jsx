export const TypeFormCategory = {
  id: 0,
  nombre: "",
  descripcion: "",
  estado: 1,
  uid_creacion: "",
  comentario: "",
};

export const setTypeFormCategory = (data) => {
  return {
    id: Number(data.id_categoria),
    nombre: data.nombre,
    descripcion: data.descripcion,
    estado: Number(data.estado),
    uid_creacion: Number(data.uid_creacion),
    comentario: data.comentario || "",
  };
};

export const TypeFormCustomer = {
  id: 0,
  nombre: "",
  nit: "",
  direccion: "",
  correo: "",
  telefono: "",
  estado: 1,
  uid_creacion: 0,
  comentario: "",
};

export const setTypeFormCustomer = (data) => {
  return {
    id: data.id_cliente,
    nombre: data.nombre,
    nit: data.nit,
    direccion: data.direccion,
    correo: data.correo,
    telefono: data.telefono,
    estado: data.estado,
    uid_creacion: data.uid_creacion,
    comentario: data.comentario,
  };
};

export const TypeFormInvoice = {
  id_factura: 0,
  num_doc: "",
  fecha_doc: "",
  cliente: "",
  total: "",
  fecha_creacion: "",
  correo: "",
  estado: 1,
  uid_creacion: 0,
  comentario: "",
};

export const setTypeFormInvoice = (data) => {
  return {
    id: data.id_factura_enc,
    num_doc: data.num_doc,
    doc_date: data.fecha_doc,
    cliente: data.cliente,
    total: data.total,
    fecha_creacion: data.fecha_creacion,
    correo: data.correo,
    estado: data.estado,
    uid_creacion: data.uid_creacion,
    comentario: data.comentario,
  };
};

export const InvoiceDetail = {
  id_factura_det: 0,
};

export const TypeFormNewUser = {
  id_usuario: 0,
  usuario: "",
  correo: "",
  password: "",
  confirm_password: "",
  estado: 1,
  uid_creacion: 0,
  comentario: "",
};

export const setTypeFormNewUser = (data) => {
  return {
    id_usuario: data.id_usuario,
    usuario: data.usuario,
    correo: data.correo,
    password: data.password,
    confirm_password: data.confirm_password,
    estado: data.estado,
    uid_creacion: data.uid_creacion,
    comentario: data.comentario,
  };
};

export const TypeFormProduct = {
  id: 0,
  nombre: "",
  descripcion: "",
  precio: "",
  costo: "",
  categorias: [],
  estado: 1,
  uid_creacion: "",
  comentario: "",
};

export const setTypeFormProduct = (data) => {
  return {
    id: Number(data.id_producto),
    nombre: data.nombre,
    descripcion: data.descripcion,
    precio: data.precio,
    costo: data.precio,
    categorias: data.categorias,
    estado: 1,
    uid_creacion: "",
    comentario: "",
  };
};

export const TypeFormUser = {
  id_usuario: 0,
  usuario: "",
  correo: "",
  password: "1234",
  estado: 1,
  uid_creacion: 0,
  comentario: "",
};
export const setTypeFormUser = (data) => {
  return {
    id_usuario: data.id_usuario,
    usuario: data.nombre ?? data.usuario,
    correo: data.correo,
    password: data.password,
    estado: 1,
    uid_creacion: 0,
    comentario: "",
  };
};
