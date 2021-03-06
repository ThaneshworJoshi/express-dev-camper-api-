// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
exports.getBootcamps = (req, res, next) => {
  res.status(200).send({ success: 'true', msg: 'Show all bootcamps' });
  next();
};

// @desc    Get single bootcamps
// @route   GET /api/v1/bootcamps/:id
// @access  Public
exports.getBootcamp = (req, res, next) => {
  res.status(200).send({
    success: 'true',
    msg: `Display bootcamp with id ${req.params.id}`,
  });
  next();
};

// @desc    Create new  bootcamp
// @route   GET /api/v1/bootcamps/:id
// @access  Private
exports.createBootcamp = (req, res, next) => {
  res.status(200).send({
    success: 'true',
    msg: `Display bootcamp with id ${req.params.id}`,
  });
  next();
};

// @desc    Update bootcamp
// @route   PUT /api/v1/bootcamps/:id
// @access  Private
exports.updateBootcamp = (req, res, next) => {
  res.status(200).send({
    success: 'true',
    msg: `Update bootcamp with id ${req.params.id}`,
  });
  next();
};

// @desc    Delete bootcamp
// @route   DELETE /api/v1/bootcamps/:id
// @access  Private
exports.deleteBootcamp = (req, res, next) => {
  res.status(200).send({
    success: 'true',
    msg: `Delete bootcamp with id ${req.params.id}`,
  });
  next();
};
