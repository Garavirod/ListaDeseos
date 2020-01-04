import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';


export class DeseosService {
  listas: Lista [] = [];
  constructor() { 
    console.log('Service was initializated!!!!');    
  }
}
