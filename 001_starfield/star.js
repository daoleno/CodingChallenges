function Star() {
  this.x = random(-width, width);
  this.y = random(-height, height);
  this.z = random(width);
  // previous Z
  this.pz = this.z
  
  this.update = function() {
    this.z = this.z - speed;
    if (this.z < 1) {
      this.x = random(-width, width);
      this.y = random(-height, height);
      this.z = width;
      this.pz = this.z;
    }
  }
  
  this.show = function() {
    fill(255);
    noStroke();
    
    // draw point
    let newX = map(this.x/this.z, 0, 1, 0, width);
    let newY = map(this.y/this.z, 0, 1, 0, height);
    let r = map(this.z, 0, width, 10, 0);
    ellipse(newX, newY, r, r);
    
    // draw line
    let px = map(this.x/this.pz, 0, 1, 0, width);
    let py = map(this.y/this.pz, 0, 1, 0, height);
    stroke(255);
    line(px, py, newX, newY);
    
    // update z
    this.pz = this.z;
  }
}