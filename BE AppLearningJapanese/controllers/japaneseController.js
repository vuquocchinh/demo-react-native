import Japanese from "../models/JapaneseSchema.js";
export const createWord = async (req, res) => {
  const { name, image, type, example } = req.body;
  try {
    const japanese = new Japanese({
      name,
      type,
      image,
      example,
    });
    await Japanese.create(japanese);
    res.status(200).json({
      success: true,
      message: "japanese successfull created",
      data: japanese,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Internal Server Error" + error });
  }
};
export const getAllWord = async (req, res) => {
  try {
    const japanese = await Japanese.find({});
    res.status(200).json({
      success: true,
      message: "japanese Found",
      data: japanese,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Not japanese Found",
    });
  }
};
export const getWordType = async (req, res) => {
  try {
    const japanese = await Japanese.find({type:req.params.type});
    res.status(200).json({
      success: true,
      message: "japanese Found",
      data: japanese,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Not japanese Found",
    });
  }
};
