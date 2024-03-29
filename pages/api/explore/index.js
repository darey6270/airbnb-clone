import events from "./data.json";

const handler = async (req, res) => {
    res.status(200).json(events);
};
export default handler;