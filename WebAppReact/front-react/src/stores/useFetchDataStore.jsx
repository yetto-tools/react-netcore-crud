const pendingRequests = {}; // Objeto para rastrear las solicitudes en curso

// Función para realizar fetch
const fetchData = async (
  setStore = () => {},
  url = null,
  method = "GET",
  body = null,
  contentType = "application/json",
  token = null,
  setIsLoading
) => {
  // Comprobar si la solicitud a esta URL ya está en curso
  if (pendingRequests[url]) {
    console.warn(`La solicitud a la URL ${url} ya está en curso.`);
    return {
      data: {},
      loading: false,
      error: "Solicitud en curso",
      message: null,
    };
  }

  // Marcar esta URL como en curso
  pendingRequests[url] = true;

  const options = {
    method,
    headers: {
      "Content-Type": contentType,
    },
    body: body ? JSON.stringify(body) : null,
  };

  if (body instanceof FormData) {
    options.body = body;
  } else {
    options.headers["Content-Type"] = contentType;
    options.body = body ? JSON.stringify(body) : null;
  }

  // Añadir el token al encabezado si está presente
  if (token) {
    options.headers["Authorization"] = `Bearer ${token}`;
  }

  let struct = {
    data: {},
    loading: true,
    error: null,
    message: null,
  };

  try {
    setIsLoading(true);
    const response = await fetch(url, options);
    const resContentType = response.headers.get("Content-Type");

    if (response.status === 500) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    if (response.status === 401) {
      struct.message = "Unauthenticated";
    }
    if (response.status === 405) {
      struct.message = "Method Not Allowed";
    }

    if (resContentType.includes("application/json")) {
      struct.data = await response.json(); // Procesa como JSON
    } else if (resContentType.includes("text/plain")) {
      struct.data = await response.text(); // Procesa como texto plano
    } else if (resContentType.includes("text/html")) {
      struct.data = await response.text(); // Procesa como HTML
    } else {
      struct.data = await response.blob(); // Procesa como blob para otros tipos
    }

    return struct;
  } catch (error) {
    struct.error = error.message;
  } finally {
    struct.loading = false;
    setIsLoading(false);
    setStore(struct);
    // Quitar la URL del registro de solicitudes en curso
    delete pendingRequests[url];
  }
};

const APIFetchData = async (props) => {
  // Desestructura props aquí si estás pasando un objeto, o directamente en los parámetros de la función
  const { setStore, url, method, body, contentType, token, setIsLoading } =
    props;

  return await fetchData(
    setStore,
    url,
    method,
    body,
    contentType,
    token,
    setIsLoading
  );
};

export default APIFetchData;
