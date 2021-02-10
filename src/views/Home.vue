<template>
  <div class="home">
    <div class="bg-image">
      <img
        src="https://th.bing.com/th/id/Rd2d143032dcfe18b441f4fa5cf83eab5?rik=BPy8NMl26pkTyw&riu=http%3a%2f%2fthegunstoretx.com%2fwp-content%2fuploads%2f2011%2f10%2fGSF4391.jpg&ehk=3N6XzMdL60jHacuo%2fFKV4a26Yd5m4P0TOFKuNkTu3NM%3d&risl=&pid=ImgRaw"
        class="img-fluid intro-image"
        alt="Sample"
        width="100%"
      />
      <div class="mask" style="background-color: rgba(0, 0, 0, 0.4)">
        <div class="d-flex justify-content-center align-items-center h-100">
          <h1 class="text-white mb-0">940-331-5675</h1>
        </div>
      </div>
    </div>
  </div>
  <br />
  <br />
  <br />
  <div class="container text-center">
    <h1 class="display-4">Features with Us</h1>
    <br />
    <div class="row">
      <div class="col-md-4">
        <i class="fas icon text-info fa-map-marked-alt"></i>
        <h3>Locally Owned</h3>
        <p>
          Owned by Mr. Smith himself, since 1980. He was previously located
          in Damascus but had moved to Wichita Falls to be around his home
          town people, where he grew up.
        </p>
        <button type="button" class="btn btn-primary">Info</button>
      </div>
      <div class="col-md-4">
        <i class="fas icon text-info fa-lock"></i>
        <h3>Security</h3>
        <p>
          We also sell gun cases, trigger locks, and enhanced digital
          security locks for guns display cases. Those are special
          ordered and a minimum spent required for shipping, to your
          your local store.
        </p>
        <button type="button" class="btn btn-primary">Info</button>
      </div>
      <div class="col-md-4">
        <i class="fas icon text-info fa-shopping-bag"></i>
        <h3>Buyer Protection</h3>
        <p>
          We safeguard your payment transaction, whether it be online or
          at the store. Your security is utmost important to us and we
          have insurance on our online purchases, including warranty.
        </p>
        <button type="button" class="btn btn-primary">Info</button>
      </div>
    </div>
    <br />
    <br />
    <br />
    <div class="jumbotron">
      <div class="bg-image">
          <img src="https://www.crcgunsandweaponry.com/wp-content/uploads/2017/10/gun-shop.jpg"
            class="img-fluid"
            width="100%"
            alt=""
          />
        <div class="mask">
          <div class="d-flex justify-content-center align-items-center h-100">
            <h1 class="text-info display-4">Fully Stocked</h1>
          </div>
        </div>
      </div>
    </div>
    <br />
    <br />
    <br />
    <div class="jumbotron">
      <div class="bg-image">
        <img src="https://alphanewsmn.com/wp-content/uploads/2020/04/Bills-Gun-Shop.png"
          class="img-fluid"
          width="100%"
          alt=""
        />
        <div class="mask">
          <div class="d-flex justify-content-center align-items-center h-100">
            <h1 class="text-info display-4">All Types</h1>
          </div>
        </div>
      </div>
    </div>
    <br />
    <br />
    <br />
    <div class="jumbotron">
      <div class="bg-image">
        <img src="https://thegunstorect.com/wp-content/uploads/2019/07/IMG_4858.jpg"
          class="img-fluid"
          width="100%"
          alt=""
        />
        <div class="mask">
          <div class="d-flex justify-content-center align-items-center h-100">
            <h1 class="text-info display-4">Hunting Seasons</h1>
          </div>
        </div>
      </div>
    </div>
    <br />
    <br />
    <br />
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <img src="https://th.bing.com/th/id/R9855aa36fb275dc8b328c15b19749d52?rik=3UehqY6hJFdHHg&riu=http%3a%2f%2fi.ebayimg.com%2f00%2fs%2fNTAwWDQxNA%3d%3d%2fz%2fO1UAAOxyBvZTWIGA%2f%24_3.JPG%3fset_id%3d2&ehk=lovcLhrywfUtQ4xCyOcwwhFlbnXdL6gNKc7%2b6BUFe%2bA%3d&risl=&pid=ImgRaw"
            alt="schedule"
            class="img-fluid"
            width="100%"
          />
        </div>
        <div class="col-md-6">
          <h2>Location</h2>
          <h5>
            1131 Kemp BLVD <br />
            Wichita Falls, Tx. <br />
            940-331-5675
          </h5>
          <form>
            <!-- Name input -->
            <div class="form-outline mb-4">
              <input type="text" id="form4Example1" class="form-control" />
              <label class="form-label" for="form4Example1">Name</label>
            </div>

            <!-- Email input -->
            <div class="form-outline mb-4">
              <input type="email" id="form4Example2" class="form-control" />
              <label class="form-label" for="form4Example2">Email address</label>
            </div>

            <!-- Message input -->
            <div class="form-outline mb-4">
              <textarea class="form-control" id="form4Example3" rows="4"></textarea>
              <label class="form-label" for="form4Example3">Message</label>
            </div>

            <!-- Submit button -->
            <button type="submit" class="btn btn-primary btn-block mb-4">Send</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // code here
  }
}
</script>

<style scoped>
.icon {
  font-size: 38px;
}
.intro-image {
  max-height: 780px;
}
</style>
