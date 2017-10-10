const Human = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName; 
}

Human.prototype.completeName = function() {
    var name
    this.lastName = this.lastName ? this.lastName : this.firstName
    this.firstName = this.firstName ? this.firstName : this.lastName
    name = [this.firstName, this.lastName].join(" ")
    if(!name.trim()) {
        return 'unknown'
    }
    return name
}

module.exports = Human