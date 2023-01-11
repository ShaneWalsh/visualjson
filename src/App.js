import './skeleton/normalize.css';
import './skeleton/skeleton.css';
import './App.css';
import JsonNavigator from "./components/Navigator"

function App() {

  // TODO extract to context + Store.
  // TODO sorting by original position, alpha
  const parseData = (data) => {
    let paths = Object.getOwnPropertyNames(data);
    // for each path, 
      // determine its value, string, boolean, date, Object, Array.
        // display fields for primatives
        // 
      for(let p of paths){
          console.log(data[p]);
      }
    
  }

  let navigate = parseData(testData);

  return (
    <div className="App">
      
      <JsonNavigator
        navigate={navigate}
      ></JsonNavigator>
    </div>
  );
}

export default App;



// Taken from here, https://opensource.adobe.com/Spry/data/json/donuts.js
const testData = {
  "items":
      {
          "item":
              [
                  {
                      "id": "0001",
                      "type": "donut",
                      "name": "Cake",
                      "ppu": 0.55,
                      "batters":
                          {
                              "batter":
                                  [
                                      { "id": "1001", "type": "Regular" },
                                      { "id": "1002", "type": "Chocolate" },
                                      { "id": "1003", "type": "Blueberry" },
                                      { "id": "1004", "type": "Devil's Food" }
                                  ]
                          },
                      "topping":
                          [
                              { "id": "5001", "type": "None" },
                              { "id": "5002", "type": "Glazed" },
                              { "id": "5005", "type": "Sugar" },
                              { "id": "5007", "type": "Powdered Sugar" },
                              { "id": "5006", "type": "Chocolate with Sprinkles" },
                              { "id": "5003", "type": "Chocolate" },
                              { "id": "5004", "type": "Maple" }
                          ]
                  },
                  {
                      "id": "0002",
                      "type": "donut",
                      "name": "Raised",
                      "ppu": 0.55,
                      "batters":
                          {
                              "batter":
                                  [
                                      { "id": "1001", "type": "Regular" }
                                  ]
                          },
                      "topping":
                          [
                              { "id": "5001", "type": "None" },
                              { "id": "5002", "type": "Glazed" },
                              { "id": "5005", "type": "Sugar" },
                              { "id": "5003", "type": "Chocolate" },
                              { "id": "5004", "type": "Maple" }
                          ]
                  },
      
                  {
                      "id": "0003",
                      "type": "donut",
                      "name": "Old Fashioned",
                      "ppu": 0.55,
                      "batters":
                          {
                              "batter":
                                  [
                                      { "id": "1001", "type": "Regular" },
                                      { "id": "1002", "type": "Chocolate" }
                                  ]
                          },
                      "topping":
                          [
                              { "id": "5001", "type": "None" },
                              { "id": "5002", "type": "Glazed" },
                              { "id": "5003", "type": "Chocolate" },
                              { "id": "5004", "type": "Maple" }
                          ]
                  },
                  {
                      "id": "0004",
                      "type": "bar",
                      "name": "Bar",
                      "ppu": 0.75,
                      "batters":
                          {
                              "batter":
                                  [
                                      { "id": "1001", "type": "Regular" },
                                  ]
                          },
                      "topping":
                          [
                              { "id": "5003", "type": "Chocolate" },
                              { "id": "5004", "type": "Maple" }
                          ],
                      "fillings":
                          {
                              "filling":
                                  [
                                      { "id": "7001", "name": "None", "addcost": 0 },
                                      { "id": "7002", "name": "Custard", "addcost": 0.25 },
                                      { "id": "7003", "name": "Whipped Cream", "addcost": 0.25 }
                                  ]
                          }
                  },

                  {
                      "id": "0005",
                      "type": "twist",
                      "name": "Twist",
                      "ppu": 0.65,
                      "batters":
                          {
                              "batter":
                                  [
                                      { "id": "1001", "type": "Regular" },
                                  ]
                          },
                      "topping":
                          [
                              { "id": "5002", "type": "Glazed" },
                              { "id": "5005", "type": "Sugar" },
                          ]
                  },

                  {
                      "id": "0006",
                      "type": "filled",
                      "name": "Filled",
                      "ppu": 0.75,
                      "batters":
                          {
                              "batter":
                                  [
                                      { "id": "1001", "type": "Regular" },
                                  ]
                          },
                      "topping":
                          [
                              { "id": "5002", "type": "Glazed" },
                              { "id": "5007", "type": "Powdered Sugar" },
                              { "id": "5003", "type": "Chocolate" },
                              { "id": "5004", "type": "Maple" }
                          ],
                      "fillings":
                          {
                              "filling":
                                  [
                                      { "id": "7002", "name": "Custard", "addcost": 0 },
                                      { "id": "7003", "name": "Whipped Cream", "addcost": 0 },
                                      { "id": "7004", "name": "Strawberry Jelly", "addcost": 0 },
                                      { "id": "7005", "name": "Rasberry Jelly", "addcost": 0 }
                                  ]
                          }
                  }
              ]
      }
}
