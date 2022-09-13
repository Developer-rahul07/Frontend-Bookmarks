import React from "react";

const Register = () => {
  return (
    <>
      <main class="bg-white max-w-lg mx-auto p-5 md:p-12 my-5 rounded-lg shadow-2xl">
        <section>
          <h6 class="font-bold text-1xl">
            Register And Become Family Member🔖
          </h6>
        </section>

        <section class="mt-5">
          <form class="flex flex-col" method="POST" action="#">
            <div class="mb-3 pt-1 rounded bg-gray-200">
              <label
                class="block text-gray-700 text-sm font-bold mb-1 ml-3"
                for="text"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-blue-600 transition duration-500 px-3 "
              />
            </div>

            <div class="mb-3 pt-1 rounded bg-gray-200">
              <label
                class="block text-gray-700 text-sm font-bold mb-1 ml-3"
                for="email"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-blue-600 transition duration-500 px-3"
              />
            </div>

            <div class="mb-3 pt-1 rounded bg-gray-200">
              <label
                class="block text-gray-700 text-sm font-bold mb-1 ml-3"
                for="email"
              >
                Profile Photo
              </label>
              <input
                type="file"
                id="email"
                class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-blue-600 transition duration-500 px-3"
              />
            </div>

            <div class="mb-3 pt-1 rounded bg-gray-200">
              <label
                class="block text-gray-700 text-sm font-bold mb-1 ml-3"
                for="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-blue-600 transition duration-500 px-3"
              />
            </div>

            <button
              class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
              type="submit"
            >
              Register
            </button>
          </form>
        </section>
      </main>

      <div class="max-w-lg mx-auto text-center ">
        <p class="text-black">
          Already have an account?
          <a
            href="/login"
            class="font-bold hover:underline text-blue-600 hover:text-blue-700"
          >
            Login
          </a>
          .
        </p>
      </div>
    </>
  );
};

export default Register;
