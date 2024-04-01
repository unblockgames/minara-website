FROM ubuntu:latest

#Install basic updates
RUN apt-get update
RUN apt-get upgrade -y
#Install VIM
RUN apt-get install vim -y
#Install curl
RUN apt-get install -y bash curl
# Install build tools and Python
RUN apt-get install -y build-essential python3
#Install NVM and PNPM
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
ENV NVM_DIR /root/.nvm
RUN curl -fsSL https://get.pnpm.io/install.sh | bash
RUN ln -s /root/.local/share/pnpm/pnpm /usr/local/bin/pnpm
#Copy files
COPY . /app
WORKDIR /app
#Install Node
RUN . $NVM_DIR/nvm.sh && \
    nvm install --lts && \
    nvm use --lts && \
    nvm alias default lts/* && \
    NODE_VERSION=$(nvm version lts/*)
ENV PATH $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH
# Install node-gyp globally
RUN . $NVM_DIR/nvm.sh && \
    npm install -g node-gyp
# Build the project
RUN . $NVM_DIR/nvm.sh && \
    pnpm install && \
    pnpm build
EXPOSE 3017
#Run the build
CMD . $NVM_DIR/nvm.sh && pnpm start