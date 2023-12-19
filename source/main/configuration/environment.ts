import dotenv from 'dotenv'

dotenv.config() // Loads .env file contents into process.env

export const {
  PORT
} = process.env
