class config():
	SQLALCHEMY_TRACK_MODIFICATIONS = False
	SECRET_KEY = ''
	SQLALCHEMY_DATABASE_URI = ''
	DEBUG = False

class Development(config):
	SECRET_KEY = 'MinhaNamoradaEUmaGostosinhaLinda'
	DEBUG = True