

class HomeController{
    getHomePage(req,res){
        return res.render('homepages');
    }
}

module.exports = new HomeController();