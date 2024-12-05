export class Database {
  database = {}

  select(table){
    const table = this.database[table] ?? []
    return table
  }

  insert(table, data){
    if(Array.isArray(this.database[table])) {
      this.database[table].push(data)
    } else {
      this.database[table] = [data]
    }

    return data;

  }


}