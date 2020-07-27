from flask import Flask
import os
from flask_sqlalchemy import SQLAlchemy
from flask_script import Manager
from flask_migrate import Migrate, MigrateCommand

app =  Flask(__name__)
app.config.from_object('config.Development')

db = SQLAlchemy(app)

migrate = Migrate(app, db)

manager = Manager(app)
manager.add_command('db', MigrateCommand)

from app.controllers import url

app.register_blueprint(url.bp_curriculo) 
app.register_blueprint(url.bp_front)
