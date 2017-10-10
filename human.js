const Human = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName; 
}

Human.prototype.completeName = function() {
    return [this.firstName, this.lastName].join(" ");
}