const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const stripe = require("stripe")(process.env.PAYMENT_SECRET);
const jwt = require("jsonwebtoken");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");



const port = process.env.PORT || 5000;