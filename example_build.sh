#/bin/bash

# pip
function build_idb_pip_wheel() {
	rm -rf dist
	rm -rf .eggs
	export FB_IDB_VERSION="YOUR_VERSION"
	# 或许还需要pyre-extensions??
	pip3 install grpclib==0.4.1 wheel setuptools
	python3 setup.py sdist bdist_wheel
	mv dist/*.whl build_all_shell_output/
}

# idb_companion
function build_idb_companion() {
	# 第一遍跑肯定会失败, 按照https://github.com/grpc/grpc-swift?tab=readme-ov-file#getting-the-protoc-plugins把protoc-gen-swift和protoc-gen-grpc-swift补充上再跑就能过了
	./idb_build.sh idb_companion build build_output
}

echo "DO NOT RUN THIS SCRIPT, ONLY NEED READ THE SCRIPT CODE!!"
exit 1