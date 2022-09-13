import React from "react";

const Login = () => {
  return (
    <>
      <main class="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
        <section>
          <h3 class="font-bold text-2xl">Welcome to Family</h3>
          <p class="text-gray-600 pt-2">Sign in to your account.</p>
        </section>

        <section class="mt-10">
          <form class="flex flex-col" method="POST" action="#">
            <div class="mb-6 pt-3 rounded bg-gray-200">
              <label
                class="block text-gray-700 text-sm font-bold mb-2 ml-3"
                for="email"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-blue-600 transition duration-500 px-3 pb-3"
              />
            </div>
            <div class="mb-6 pt-3 rounded bg-gray-200">
              <label
                class="block text-gray-700 text-sm font-bold mb-2 ml-3"
                for="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-blue-600 transition duration-500 px-3 pb-3"
              />
            </div>
            <div class="flex justify-end">
              <a
                href="#"
                class="text-sm text-blue-600 hover:text-blue-700 hover:underline mb-6"
              >
                Forgot your password?
              </a>
            </div>
            <button
              class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
              type="submit"
            >
              Login
            </button>
          </form>
        </section>
      </main>

      <div class="max-w-lg mx-auto text-center ">
        <p class="text-black">
          Don't have an account?
          <a
            href="/register"
            class="font-bold hover:underline text-blue-600 hover:text-blue-700"
          >
            Register
          </a>
          .
        </p>
      </div>
    </>
  );
};

export default Login;
