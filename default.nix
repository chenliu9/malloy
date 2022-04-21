with import <nixpkgs> {};
stdenv.mkDerivation {
  name = "malloy";
  buildInputs = [ nodejs-16_x yarn jdk8 google-cloud-sdk postgresql ruby.devEnv git];
  shellHook = ''
    alias gs="git status"
    alias gl="git pull"
    alias gb="git branch"
  '';
}
