const getconfig = () => ({
       headers: { Authorizathion: `bearer ${localStorage.getItem("token")}` }
})

export default getconfig