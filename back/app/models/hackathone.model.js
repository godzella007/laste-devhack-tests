module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      title: String,
      description: String,
      published: Boolean,
      Rules:String,
      NomEntriprise:String,
      Numbre_Equipe:Number,
      Date_début:String,
      Date_fin:String, 
      image:String,
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const hackathon = mongoose.model("hackathones", schema);
  return hackathon;
};
