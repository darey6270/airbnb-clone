import events from "./cardData.json";

const handler = (req, res) => {
    res.status(200).json(events)
}

export default handler;