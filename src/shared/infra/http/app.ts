import 'reflect-metadata';
import 'dotenv/config';
import express, { Application } from 'express';

class App {
  public server: Application;
}

export default new App();
