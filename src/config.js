let config;

if (process.env.NODE_ENV === "production") {
  config = {
    $api_url: "http://localhost/simrsv2/api",
    timeoutDuration: 30000,
    someOtherProps: 'xyz'
  };
} else {
  config = {
    $api_url: "http://localhost/simrsv2/api",
    timeoutDuration: 1000,
    someOtherProps: 'abc'
  };
}

export { config }