declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: String;
      HOST_PORT: number;
      HOST_ADDR: String;
      PWD: string;
      CONNECTION_DB: String;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export { }