import React from "react";
import CHILD_IMAGE from "../../assets/images/landing/image_1.png";
function SignUp() {
  const [parentData, setParentData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
  });
  const [childrenData, setChildrenData] = React.useState([
    {
      username: "",
      firstName: "",
      lastName: "",
      yearOfBirth: "",
      height: "",
      weight: "",
      exercise: "",
      password: "",
    },
  ]);

  const addChild = () => {
    const data = {
      username: "",
      firstname: "",
      lastname: "",
      yearofbirth: "",
      height: "",
      weight: "",
      exercise: [],
      password: "",
    };

    setChildrenData([...childrenData, data]);
  };

  const onParentDataChange = (e) => {
    setParentData({ ...parentData, [e.target.name]: e.target.value });
  };

  const onChildDataChange = (e, index) => {
    const newChildrenData = [...childrenData];
    newChildrenData[index][e.target.name] = e.target.value;
    setChildrenData(newChildrenData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(parentData);
    console.log(childrenData);
  };
  return (
    <div className="mx-w-5xl mx-auto">
      <div className="py-4 md:py-24 flex flex-col md:flex-row justify-center items-center space-y-20 md:space-y-0 md:space-x-6 lg:space-x-12 text-center md:text-left">
        <div className="card shadow-lg   mb-8 md:mb-12 w-4/5">
          <div className="card-body ">
            <form action="">
              <h1 class="font-semibold   md:text-3xl tracking-tight  mb-5">
                Parent
              </h1>
              <div class="form-group">
                <label class="label" for="firstName">
                  <span class="label-text">First name</span>
                </label>
                <input
                  name="firstName"
                  type="text"
                  class="form-control w-full input input-bordered  "
                  placeholder="Jack"
                  onChange={(e) => onParentDataChange(e)}
                  value={parentData.firstName}
                />
              </div>
              <div class="form-group">
                <label class="label" for="firstName">
                  <span class="label-text">Last name</span>
                </label>
                <input
                  name="lastName"
                  type="text"
                  class="form-control w-full input input-bordered  "
                  placeholder="Doe"
                  onChange={(e) => onParentDataChange(e)}
                  value={parentData.lastName}
                />
              </div>
              <div class="form-group">
                <label class="label" for="firstName">
                  <span class="label-text">Email</span>
                </label>
                <input
                  name="lastName"
                  type="email"
                  class="form-control w-full input input-bordered  "
                  placeholder="Jack.doe@gmail.com"
                  onChange={(e) => onParentDataChange(e)}
                  value={parentData.email}
                />
              </div>

              <div class="form-group">
                <label class="label" for="password">
                  <span class="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  class="form-control w-full input input-bordered  "
                  placeholder="***************"
                  onChange={(e) => onParentDataChange(e)}
                  value={parentData.password}
                />
              </div>
              <div class="form-group">
                <label class="label" for="phone">
                  <span class="label-text">Phone Number</span>
                </label>
                <input
                  name="phone"
                  type="text"
                  class="form-control w-full input input-bordered  "
                  placeholder="123-456-7890"
                  onChange={(e) => onParentDataChange(e)}
                  value={parentData.phone}
                />
              </div>
            </form>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-20 md:space-y-0 md:space-x-6 lg:space-x-12 text-center md:text-left my-5">
              <button
                onClick={addChild}
                className="btn btn-warning rounded-full w-1/2 "
              >
                Add a Child
              </button>
            </div>

            {childrenData.map((child, index) => {
              return (
                <div key={index}>
                  {divider(index + 1)}
                  <div class="form-group">
                    <label class="label" for="name">
                      <span class="label-text">Email</span>
                    </label>
                    <input
                      name="Email"
                      type="text"
                      class="form-control w-full input input-bordered  "
                      placeholder="Jack.Doe@gmail.com"
                      value={child.email}
                      onChange={(e) => onChildDataChange(e, index)}
                    />
                  </div>
                  <div class="form-group">
                    <label class="label" for="username">
                      <span class="label-text">Username</span>
                    </label>
                    <input
                      name="username"
                      type="text"
                      class="form-control w-full input input-bordered  "
                      placeholder="Jane_Doe"
                      value={child.username}
                      onChange={(e) => onChildDataChange(e, index)}
                    />
                  </div>
                  <div class="form-group">
                    <label class="label" for="firstName">
                      <span class="label-text">First Name</span>
                    </label>
                    <input
                      name="firstName"
                      type="text"
                      class="form-control w-full input input-bordered  "
                      placeholder="Sam"
                      value={child.firstName}
                      onChange={(e) => onChildDataChange(e, index)}
                    />
                  </div>
                  <div class="form-group">
                    <label class="label" for="lastName">
                      <span class="label-text">Last Name</span>
                    </label>
                    <input
                      name="lastName"
                      type="text"
                      class="form-control w-full input input-bordered  "
                      placeholder="Doe"
                      onChange={(e) => onChildDataChange(e, index)}
                    />
                  </div>
                  <div class="form-group">
                    <label class="label" for="yearOfBirth">
                      <span class="label-text">Year of Birth</span>
                    </label>
                    <input
                      name="yearOfBirth"
                      type="date"
                      class="form-control w-full input input-bordered  "
                      placeholder="date here"
                      onChange={(e) => onChildDataChange(e, index)}
                    />
                  </div>
                  <div class="form-group">
                    <label class="label" for="height">
                      <span class="label-text">Height</span>
                    </label>
                    <input
                      name="height"
                      type="text"
                      class="form-control w-full input input-bordered  "
                      placeholder="x ft xx in"
                      onChange={(e) => onChildDataChange(e, index)}
                    />
                  </div>
                  <div class="form-group">
                    <label class="label" for="exercise">
                      <span class="label-text">Exercise</span>
                    </label>
                    <select
                      class="select select-bordered w-full max-w-xs"
                      defaultValue={""}
                      name="exercise"
                      onChange={(e) => onChildDataChange(e, index)}
                    >
                      <option disabled value={""}>
                        Exercise
                      </option>
                      <option value={"low"}>Low</option>
                      <option value={"moderate"}>Moderate</option>
                      <option value={"high"}>High</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label class="label" for="password">
                      <span class="label-text">Password</span>
                    </label>
                    <input
                      name="password"
                      type="password"
                      class="form-control w-full input input-bordered  "
                      placeholder="*****************"
                      onChange={(e) => onChildDataChange(e, index)}
                    />
                  </div>
                </div>
              );
            })}
            <div className="flex flex-col md:flex-row justify-center items-center space-y-20 md:space-y-0 md:space-x-6 lg:space-x-12 text-center md:text-left my-5">
              <button
                onClick={handleSubmit}
                className="btn btn-warning rounded-full w-1/2 "
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const divider = (child_num) => {
  return (
    <div class="divider py-4">
      <span class="opacity-75">Child {child_num}</span>
    </div>
  );
};
export default SignUp;
