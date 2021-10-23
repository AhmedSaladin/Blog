const User = require("./user.model");

describe("User class tests", () => {
  it("Should return valdation error for new user", () => {
    const user = new User(null, "asd", "bc", "vds", "cx", "dasdasd", "ddssd");
    return user
      .createUser()
      .then((data) => expect(data).toBe("Validation Error"));
  });

  it("Should return validation error for update user", () => {
    const user = new User(
      15,
      "ahmed",
      "l",
      "ahme@ahme.com",
      "ahmed123445",
      "ssss",
      new Date()
    );
    const u = user.updateUserInfo();
    expect(u).toBe("Validation Error");
  });
  it("Should return validation error for changing password", () => {
    const user = new User(
      "12",
      "ahmed",
      "kahled",
      "aaa@hmo.com",
      "ahasdn12",
      "asdsa",
      new Date("")
    );
    return user
      .updatePassword("dss")
      .then((data) => expect(data).toBe("Validation Error"));
  });

  it("Should create new user", () => {
    const user = new User(
      null,
      "ahmed",
      "khaled",
      "ahmed@khaled.com",
      "ahmed123456",
      "profile",
      new Date()
    );
    return user.createUser().then((data) => {
      expect(data).toBe(data);
    });
  });

  it("Should update current user data", () => {
    const user = new User(
      15,
      "ahmed",
      "khaled",
      "ahmed@khaled.com",
      "ahmed123456",
      "profile",
      new Date("2021-10-23")
    );
    const data = user.updateUserInfo();
    expect(data).toMatchObject({
      avatar: "profile",
      birth_day: new Date("2021-10-23"),
      email: "ahmed@khaled.com",
      first_name: "ahmed",
      id: 15,
      last_name: "khaled",
      password: "ahmed123456",
    });
  });

  it("Should hashing user password", () => {
    const user = new User(
      15,
      "ahmed",
      "khaled",
      "ahmed@khaled.com",
      "ahmed123456",
      "profile",
      new Date("2021-10-23")
    );
    return user
      .updatePassword("ahmed22351")
      .then((data) => expect(data).toBeTruthy());
  });
});
