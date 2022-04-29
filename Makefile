# Usage:
# make        # compile all binary
# make clean  # remove ALL binaries and objects

.PHONY = all clean

MAKEFILE_DIR := $(dir $(abspath $(firstword $(MAKEFILE_LIST))))
MALLOY_PACKAGE_DIR := ${MAKEFILE_DIR}packages/malloy
MALLOY_POSTGRES_DIR := ${MAKEFILE_DIR}packages/malloy-db-postgres
MALLOY_VSCODE :=  ${MAKEFILE_DIR}packages/malloy-vscode

all: workspaces malloy_package malloy-db-postgres_package

vscode: malloy-vs-code

workspaces:
		@echo "Install and build workspaces packages"
		cd ${MAKEFILE_DIR} && yarn --version && yarn install

malloy_package:
		@echo "Install and build malloy packages"
		cd ${MALLOY_PACKAGE_DIR} && yarn --version && yarn install && yarn build

malloy-db-postgres_package:
		@echo "Install and build malloy-db-postgres packages"
		cd ${MALLOY_POSTGRES_DIR} && yarn --version && yarn install && yarn build

malloy-vs-code:
		@echo "Install and build malloy-db-postgres packages"
		cd ${MALLOY_VSCODE} && yarn install && yarn build && yarn build-extension && yarn package-extension

publish:
		@echo "Publish malloy-db-postgres"
		cd ${MALLOY_POSTGRES_DIR} && yarn --version && yarn npm publish
		@echo "Publish malloy"
		cd ${MALLOY_PACKAGE_DIR} && yarn --version && yarn npm publish

clean:
		@echo "Cleaning up..."
		cd ${MAKEFILE_DIR} && yarn clean
		cd ${MALLOY_PACKAGE_DIR} && yarn clean