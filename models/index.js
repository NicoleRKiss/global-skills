const fs = require('fs');
const path = require('path');

module.exports = (name) => {

   return {

      modelPath: path.resolve(__dirname, `../data/${name}.json`),

      getAll () {
         const fileContent = fs.readFileSync(this.modelPath, 'utf-8');
         return fileContent.length > 0 ? JSON.parse(fileContent) : [];
      },

      create (newData) {
         
         let allData = this.getAll();

         newData = { 
            id: this.generateId(),
            ...newData
         }

         allData = [...allData, newData];

         fs.writeFileSync(this.modelPath, JSON.stringify(allData, null, ' '));
      },

      generateId () {
         const allData = this.getAll();
         if (allData.length == 0) {
            return 1;
         }
         return ++allData.pop().id;
      },

      findByPk (id) {
         const allData = this.getAll();
         return allData.find(row => row.id == id);
      },

      findBySomething (callback) {
         return this.getAll().find(callback);
      },

      filterBySomething (callback) {
         return this.getAll().filter(callback);
      },

      destroy (id) {
         let allData = this.getAll();
         allData = allData.filter(row => row.id != id);
         fs.writeFileSync(this.modelPath, JSON.stringify(allData, null, ' '));
      },

      update (data, id) {
         let allData = this.getAll();
         let newData = allData.map(element => element.id == id ? element = { id, ...data } : element);
         fs.writeFileSync(this.modelPath, JSON.stringify(newData, null, ' '));
      },

      getLast () {
         let allData = this.getAll();
         return allData[allData.length - 1];
      }
   }

}