/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
  let xhr = new XMLHttpRequest();
  let method = options.method;

  let url =
    options.url +
    "?mail=" +
    options.data.mail +
    "&password=" +
    options.data.password;

  if (method == "GET") {
    xhr.open(method, url);
    xhr.responseType = "json";
    xhr.send();
  } else if (method != "GET") {
    let formData = new FormData();
    formData.append("mail", options.data.mail);
    formData.append("password", options.data.password);

    xhr.open("POST", url);
    xhr.responseType = "json";
    xhr.send(formData);
  }

  
  xhr.onload = () => {
    options.callback();
  };

  xhr.onerror = () => {
    options.callback(xhr.response);
  };
};
