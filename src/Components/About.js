import React from 'react'
import './About.css'

function About() {
  return (
    <div id="about">
      <h2 className="about-title">About</h2>
      <div className="about-data">
        <div className="about-img">
          <img src="assets/about2.jpg" alt="" />
        </div>
        <div>
          <h2 className="about-subtitle">A little bit about myself... </h2>
          <p className="about-text">
          I am a graduate from Selcuk University and master student in Istanbul University.
          I have been actively working in the industry as a Devops and Cloud Engineer for 2 years. I am currently working
          as Devops and Cloud Team leader in Westerops IT, but also working as a Devops and Cloud Engineer at Kobil. I actively use
          current technologies and cloud environments. I have experience in technologies such as Docker - Kubernetes
          - Terraform - Nginx - Ansible - Loki - Prometheus - Grafana - Zabbix - Jenkins - Gitlab
          CI/CD and I also master many cloud services on AWS.
            </p>
          <p><b>Languages and tools known:</b> </p>
          <p>
            <img className='tech-image' src="assets/aws.png" alt='aws'/>
            <img className='tech-image' src="assets/docker.png" alt='docker'/>
            <img className='tech-image' src="assets/kubernetes.svg" alt='k8s'/>
            <img className='tech-image' src="assets/rancher.png" alt='Rancher'/>
            <img className='tech-image' src="assets/dynatrace.png" alt='Dynatrace'/>
            <img className='tech-image' src="assets/loki.png" alt='Loki'/>
            <img className='tech-image' src="assets/consul.svg" alt='Consul'/>
            <img className='tech-image' src="assets/vault.svg" alt='Vault'/>
            <img className='tech-image' src="assets/redis.png" alt='Redis'/>
            <img className='tech-image' src="assets/rabbitmq.png" alt='RabbitMq'/>
            <img className='tech-image' src="assets/terraform.svg" alt='Terraform'/>
            <img className='tech-image' src="assets/argo.png" alt="argocd" />
          </p>
          <p>
            <img className='tech-image' src="assets/alibaba.svg" alt="alibabcloud" />
            <img className='tech-image' src="assets/azure-devops.svg" alt="azure-devops" />
            <img className='tech-image' src="assets/jenkins.png" alt="jenkins" />
            <img className='tech-image' src="assets/prometheus.png" alt='prometheus'/>
            <img className='tech-image' src="assets/grafhana.png" alt='grafana'/>
            <img className='tech-image' src="assets/nginx.png" alt='nginx'/>
            <img className='tech-image' src="assets/elk.png" alt='elk'/>
            <img className='tech-image' src="assets/django.svg" alt='django'/>
            <img className='tech-image' src="assets/zabbix.png" alt='zabbix'/>
            <img className='tech-image' src="assets/python.png" alt='python'/>
            <img className='tech-image' src="assets/newrelic.png" alt="New Relic" />
            <img className='tech-image' src="assets/git.png" alt="git" />
            <img className='tech-image' src="assets/gitlab.png" alt="gitlab" />
            <img className='tech-image' src="assets/github.png" alt="github" />
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
