const GET_ALL_USERS = 'SELECT [FirstName],[Password],[LastName],[EmailAddress],[Address],[Gender],[RoleID],[PhoneNumber],[Image] FROM USERS'
const GET_USERS_BY_ID = 'SELECT [FirstName],[Password],[LastName],[EmailAddress],[Address],[Gender],[RoleID],[PhoneNumber],[Image] FROM USERS WHERE ID = @id'
const POST_USER = 'INSERT INTO [Users]([FirstName],[Password],[LastName],[EmailAddress],[Address],[Gender],[RoleID],[PhoneNumber],[Image]) VALUES(@FirstName,@Password,@LastName,@EmailAddress,@Address,@Gender,@RoleID,@PhoneNumber,@Image)'
const UPDATE_USER = 'UPDATE[dbo].[Users]SET[FirstName]=@FirstName,[Password]=@Password,[LastName]=@LastName,[EmailAddress]=@EmailAddress,[Address]=@Address,[Gender]=@Gender,[RoleID]=@RoleID,[PhoneNumber]=@PhoneNumber,[Image]=@Image WHERE[id]=@id'

module.exports = {
    GET_ALL_USERS,
    GET_USERS_BY_ID,
    POST_USER,
    UPDATE_USER
}