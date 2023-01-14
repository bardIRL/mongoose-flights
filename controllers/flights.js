module.exports = {
  index,
};

function index(req, res) {
  title: "Your Booked Flights",
    flight.find({}, function (err, flights) {
      res.render("flight/index", { movies });
    });
}
