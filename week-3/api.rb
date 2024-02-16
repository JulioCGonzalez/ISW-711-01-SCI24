#Dependencias de bibliotecas necesarias, 'sinatra' para el framework web y 'json' 
#para manipular datos JSON
require 'sinatra'
require 'json'

#ruta '/hello' que responde a las solicitudes HTTP GET.
# Y muestra un JSON
get '/hello' do
    content_type :json
    { response: 'Hello World' }.to_json
  end
#Hace consulta para parametros si no se proporciona un mensaje se pone por defecto Hello World
  get '/hello' do
    content_type :json
    message_param = params['message']
    message = message_param ? "Hello #{message_param}" : 'Hello World'
    { response: message }.to_json
  end
#Se hace el post con el cuerpo de la solicitud contenga datos JSON
  post '/user' do
    content_type :json
    request_body = JSON.parse(request.body.read)
    name = request_body['name']
    lastname = request_body['lastname']
    { response: "El usuario #{name} #{lastname} fue creado" }.to_json
  end