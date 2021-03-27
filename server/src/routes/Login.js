const Login = (req, res) => {
    const { username, password } = req.body;
    if (!username || !password ) res.send({ status: false, data: 'Missing information'})
    else {
        if (username == process.env.ADMUSER && password == process.env.PASSWORD)
            res.send({ status: true, data: 'Logged in'})
        else
            res.send({ status: false, data: 'Error with the credentials'})
    }
};

module.exports = Login;