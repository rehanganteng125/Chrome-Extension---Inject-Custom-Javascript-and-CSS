{
    "name" : "CBW | Traderie Tools",
    "version": "0.0.1",
    "manifest_version": 2,
    "description" : "Created By: Reza Sumairu",
    "content_scripts" : [
        {
            "js" : ["source.js"],
            "css" : ["style.css"],
            "matches" : ["*://traderie.com/*"]
        }
    ]
}
