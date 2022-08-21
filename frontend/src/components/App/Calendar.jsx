import React from "react";

function Calendar() {
  return (
    <div className="py-4 md:py-24  flex justify-center items-center space-y-20 md:space-y-0  text-center md:text-left">
      <div class="overflow-x-auto  max-w-4xl flex-grow">
        <table class="table table-zebra w-full">
          <thead>
            <tr>
              <th>Time</th>
              <th>Food</th>
              <th>Carbs</th>
              <th>Protein</th>
              <th>Fat</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>9:34 AM</th>
              <td>apples</td>
              <td>14g</td>
              <td>0.3g</td>
              <td>0.2g</td>
              <td>52</td>
            </tr>

            <tr>
              <th>9:34 AM</th>
              <td>apples</td>
              <td>14g</td>
              <td>0.3g</td>
              <td>0.2g</td>
              <td>52</td>
            </tr>

            <tr>
              <th>9:34 AM</th>
              <td>apples</td>
              <td>14g</td>
              <td>0.3g</td>
              <td>0.2g</td>
              <td>52</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Calendar;
