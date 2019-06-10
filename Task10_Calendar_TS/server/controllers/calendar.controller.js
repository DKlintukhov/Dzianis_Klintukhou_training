module.exports = () => {
    res.sendFile(path.join(__dirname, "../client/index.html"));
}