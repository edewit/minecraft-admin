package org.acme.rest.json;

import java.util.List;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

import io.fabric8.kubernetes.api.model.HasMetadata;
import io.fabric8.kubernetes.client.Config;
import io.fabric8.kubernetes.client.ConfigBuilder;
import io.fabric8.kubernetes.client.DefaultKubernetesClient;
import io.fabric8.kubernetes.client.KubernetesClient;

@Path("/api/cluster")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class ClusterResource {

    @POST
    public void createMinecraftDeployment() {
        // Config config = new ConfigBuilder().withMasterUrl("http://localhost:8001/api").build();
        System.out.println("got request to create new server");
        try (KubernetesClient client = new DefaultKubernetesClient()) {
            List<HasMetadata> result = client.load(getClass().getResourceAsStream("/vanilla.yaml")).get();
            client.resourceList(result).inNamespace("default").createOrReplace();
        } catch(Error e) {
            e.printStackTrace();
        }

    }

}
