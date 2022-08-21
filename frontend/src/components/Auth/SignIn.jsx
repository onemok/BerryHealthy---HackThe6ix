import React from "react";

import PARENT_IMG from "../../assets/images/signup/parent.png";
import CHILD_IMG from "../../assets/images/signup/child.png";

function SignIn() {
  const [isParent, setIsParent] = React.useState(null);
  const [loginInfo, setLoginInfo] = React.useState({});
  const emailRef = React.useRef();
  const passwordRef = React.useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoginInfo({
      parent: isParent,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
  };
  const handleClick = (option) => {
    if (option === "parent") {
      setIsParent(true);
    } else {
      setIsParent(false);
    }
  };
  if (isParent === null) {
    return (
      <div className="mx-w-5xl  mx-auto">
        <div className="py-4 md:py-24 flex flex-col md:flex-row justify-center items-center space-y-20 md:space-y-0 md:space-x-6 lg:space-x-12 text-center md:text-left">
          <div className="flex justify-center flex-col items-center gap-4">
            <div className="relative  w-2/3 flex flex-col justify-start items-start gap-2">
              <img src={PARENT_IMG} />
            </div>
            <div>
              <button
                className="btn btn-primary rounded-full "
                onClick={() => handleClick("parent")}
              >
                Parent
              </button>
            </div>
          </div>
          <div className="flex justify-center flex-col items-center gap-4">
            <div className="relative   md:w-2/3 flex flex-col justify-start items-start gap-2">
              <img src={CHILD_IMG} />
            </div>
            <div>
              <button
                onClick={() => handleClick("child")}
                className="btn btn-secondary rounded-full"
              >
                Child
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="max-w-full  mx-auto">
        <div className=" py-4 md:py-24 flex flex-row md:flex-row justify-center items-center space-y-20 md:space-y-0  text-center md:text-left">
          <div className="flex justify-center flex-row items-center gap-4">
            {isParent ? (
              <>
                <div className="relative  w-2/3 flex flex-col justify-start items-start gap-2">
                  <img src={PARENT_IMG} />
                </div>
              </>
            ) : (
              <>
                <div className="relative  w-2/3 flex flex-col justify-start items-start gap-2">
                  <img src={CHILD_IMG} />
                </div>
              </>
            )}
            <div className="card shadow-lg w-full mx-auto mb-8 md:mb-12">
              <div className="card-body">
                <form action="#" onSubmit={handleSubmit}>
                  <div class="form-group">
                    <label class="label" for="name">
                      <span class="label-text">Email</span>
                    </label>
                    <input
                      name="Email"
                      type="text"
                      class="form-control w-full input input-bordered  "
                      placeholder="Jack.Doe@gmail.com"
                      ref={emailRef}
                    />
                    <label class="label">
                      <span class="label-text-alt">
                        {false && (
                          <>The name must be between 2 and 20 characters.</>
                        )}
                      </span>
                    </label>
                  </div>
                  <div class="form-group">
                    <label class="label" for="name">
                      <span class="label-text">Email</span>
                    </label>
                    <input
                      name="Password"
                      type="password"
                      class="form-control w-full input input-bordered  "
                      placeholder="password123"
                      ref={passwordRef}
                    />
                    <label class="label">
                      <span class="label-text-alt">
                        {false && (
                          <>The name must be between 2 and 20 characters.</>
                        )}
                      </span>
                    </label>
                  </div>
                  <div class="form-group pt-4">
                    <button type="submit" class="btn btn-primary btn-block ">
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
