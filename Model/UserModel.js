const User = function (user) {
    this.FirstName = user.FirstName;
    this.Password = user.Password;
    this.LastName = user.LastName;
    this.EmailAddress = user.EmailAddress;
    this.Address = user.Address;
    this.Gender = user.Gender;
    this.RoleID = user.RoleID;
    this.PhoneNumber = user.PhoneNumber;
    this.PositionID = user.PositionID;
    this.Image = user.Image;
    this.createdAt = user.createdAt;
    this.updatedAt = user.updatedAt;
};

module.exports = {
    User
}